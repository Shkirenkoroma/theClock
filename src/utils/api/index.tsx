import { basicUrl, region, city, ownToken } from './constants';

export interface IData {
	data: IDataTime;
}

interface IDataTime {
	datetime: ICurrentTime;
}

interface ICurrentTime {
	hour_12_wolz: string;
	minutes: string;
	seconds: string;
	date_time_txt:string,
}

export const getLocalTime = async (): Promise<IData | undefined> => {
	try {
		const response = await fetch(
			`${basicUrl}?${region}/${city}&token=${ownToken}`,
		);
		if (!response.ok) {
			const message = 'Error: ' + response.status;
			throw new Error(message);
		}

		const result = await response.json();
		return result;
	} catch (e) {
		console.log(`Something have occured wrong: ${e}`);
	}
};

export const getSecAndMinIntoDegrees = (
	time: number | undefined,
): number | undefined => {
	if (time) {
		return time * 6;
	}
};

export const getHoursIntoDegrees = (hours: number, minute: number): number =>
	hours * 30 + Math.ceil(minute / 2);
