import type { PageServerLoad } from "./$types";
import { PASSWORD } from "$env/static/private";
import api from '$lib/map.json'
import { redirect } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ url, cookies }) => {
    const password = cookies.get('password')
    if (password != PASSWORD)
        throw redirect(303, '/login')
    const id: number = Number(url.searchParams.get('id'))
    const fileData = api.find((value) => value.sections.includes(id))
    if (!fileData) {
        return { filePath: "", id: url.searchParams.get('id') }
    } else {
        return { filePath: fileData.filePath, id: url.searchParams.get('id') }
    }
}