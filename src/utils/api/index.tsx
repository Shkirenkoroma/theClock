import { basicUrl, region, city, ownToken } from './constants';

type localNumber = number;

type propsFunction = {
	setCurrentData: (e: IData) => void;
};

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
}

export const getLocalTime = async (setCurrentData: any): Promise<any> => {
	try {
		const response = await fetch(
			`${basicUrl}?${region}/${city}&token=${ownToken}`,
		);
		if (!response.ok) {
			const message = 'Error: ' + response.status;
			throw new Error(message);
		}

		const result = await response.json();
		return setCurrentData(result);
	} catch (e) {
		console.log(`Something have occured wrong: ${e}`);
	}
};

export const getSecAndMinIntoDegrees = (time: localNumber): localNumber =>
	time * 6;

export const getHoursIntoDegrees = (
	hours: localNumber,
	minute: localNumber,
): localNumber => hours * 30 + Math.ceil(minute / 2);
