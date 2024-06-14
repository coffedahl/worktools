import { PASSWORD } from "$env/static/private";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const password = formData.get('password')
        if (password == PASSWORD) {
            cookies.set('password', PASSWORD, { path: '/' })
            redirect(303, '/')
        } else {
            return { success: false }
        }
    }
} satisfies Actions