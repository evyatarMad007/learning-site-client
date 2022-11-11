import HttpService from "../utils/HttpService";


export async function getProducts(): Promise<any> {
	try {
		const response = await HttpService.get("api/products");
		return Promise.resolve(response)

	} catch (error: any) {
		return Promise.reject(error.response.data);
	}
}
