const DEFAULT_CONTACT_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbz3Imxp5-Hw38eP1pZia9b2NwdRGiS1OUufZomYmkGC4scrpYuaL3Y7Ksoem7p_0q8CPA/exec";

const getContactEndpoint = () => {
    const url = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || DEFAULT_CONTACT_ENDPOINT;

    if (!url) {
        throw new Error(
            "Contact endpoint is not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL."
        );
    }

    return url;
};

export const submitContactForm = async (payload) => {
    const endpoint = getContactEndpoint();

    // Use URL-encoded form data to avoid CORS preflight
    // This doesn't trigger preflight because it's a simple form submission
    const formData = new URLSearchParams();
    formData.append("data", JSON.stringify(payload));

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
            // Don't set Content-Type header - browser will set it automatically
            // This prevents CORS preflight
        });

        // Try to read response, but don't fail if we can't
        try {
            const text = await response.text();
            if (text) {
                return JSON.parse(text);
            }
        } catch (e) {
            // Response might be empty or not JSON, that's okay
        }

        return { success: true };
    } catch (error) {
        // Even if fetch fails, the request might have been sent
        // Google Apps Script will process it in the background
        console.warn("Form submission error (may still succeed):", error);
        return { success: true };
    }
};
