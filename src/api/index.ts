const $api = process.env.NEXT_PUBLIC_API_URL;
const department = Number(process.env.NEXT_PUBLIC_DEPARTMENT_ID);
export const APP_URL = process.env.APP_URL as string;

export interface SendFormData {
	name: string;
	phone: string;
	notes?: string;
}

if (typeof $api !== 'string') {
	throw new Error('NEXT_PUBLIC_API_URL is undefined');
}

if (typeof department !== 'number') {
	throw new Error('NEXT_PUBLIC_DEPARTMENT_ID is undefined');
}

export const sendForm = async (data: SendFormData) => {
	return fetch($api, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...data,
			department,
			status: 1,
		}),
	});
};
