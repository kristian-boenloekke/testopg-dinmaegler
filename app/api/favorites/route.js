import { getCurrentUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const user = await getCurrentUser();
    if (!user) {
        console.error('User not authenticated');
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const userId = user.id;
    const currentHomes = user.homes || [];

    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get('token');
    const token = tokenCookie ? tokenCookie.value : null;

    if (!token) {
        console.error('Token not found');
        return NextResponse.json({ error: 'Token not found' }, { status: 401 });
    }

    const { homeId } = await request.json();

    if (!homeId) {
        console.error('Home ID is required');
        return NextResponse.json({ error: 'Home ID is required' }, { status: 400 });
    }


    // Add or remove homeId based on favorite state
    let updatedHomes = [...currentHomes];

    if (updatedHomes.includes(homeId)) {
        // If homeId is already in homes array, remove it
        updatedHomes = updatedHomes.filter(id => id !== homeId);
    } else {
        // If homeId is not in homes array, add it
        updatedHomes.push(homeId);
    }

    console.log('Updated homes:', updatedHomes);

    const data = {
        homes: updatedHomes
    };

    try {
        const response = await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to update user data:', errorMessage);
            return NextResponse.json({ error: 'Failed to update user data', details: errorMessage }, { status: 400 });
        }

        const updatedUser = await response.json();
        console.log('User updated successfully', updatedUser);

        return NextResponse.json(updatedUser, { status: 200 }); // Return updated user data
    } catch (error) {
        console.error('Error during the fetch operation:', error);
        return NextResponse.json({ error: 'Error during the fetch operation', details: error.message }, { status: 500 });
    }
}
