export default async function FormSubscription() {
    async function handleSubscribe(formData) {
      'use server'; // Enables server-side actions
  
      const email = formData.get('email'); // Extract email from form data
  
      try {
        const response = await fetch('https://dinmaegler.onrender.com/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to subscribe. Please try again.');
        }
  
        const data = await response.json();
        return `Successfully subscribed with email: ${data.email}`;
      } catch (error) {
        return `Error: ${error.message}`;
      }
    }
  
    let message = null; // Holds the result message if a submission occurs
  
    return (
      <div className="w-full">
        <form action={handleSubscribe} className="flex bg-white px-2 gap-2 w-full">
          <input
            type="email"
            name="email"
            placeholder="Indtast din email addresse"
            className="bg-white py-2 text-xs w-full outline-none"
            required
          />
          <button type="submit">
            <img src="/img/arrow.svg" alt="arrow" width={20} height={20} />
          </button>
        </form>
        {message && <p className="text-sm mt-2 text-center text-white">{message}</p>}
      </div>
    );
  }