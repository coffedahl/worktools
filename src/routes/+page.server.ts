import { read } from "$app/server";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ url }) => {
    const response = await read('/src/lib/map.json')
    const api: Array<{ sections: Array<number>, filePath: string }> = JSON.parse(await response.text())
    const id: number = Number(url.searchParams.get('id'))
    const fileData = api.find((value) => value.sections.includes(id))
    if (!fileData) {
        return { filePath: "", id: url.searchParams.get('id') }
    } else {
        return { filePath: fileData.filePath, id: url.searchParams.get('id') }
    }
}