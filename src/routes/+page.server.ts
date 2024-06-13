import type { PageServerLoad } from "./$types";
import api from '$lib/map.json'


export const load: PageServerLoad = async ({ url }) => {
    const id: number = Number(url.searchParams.get('id'))
    const fileData = api.find((value) => value.sections.includes(id))
    if (!fileData) {
        return { filePath: "", id: url.searchParams.get('id') }
    } else {
        return { filePath: fileData.filePath, id: url.searchParams.get('id') }
    }
}