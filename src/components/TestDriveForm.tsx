'use client';

import { InputMask } from '@react-input/mask';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSuccessDialog } from '@/Providers/SuccessModalProvider';
import { sendForm } from '@/api';

interface TestDriveState {
	name: string;
	phone: string;
	checked: boolean;
}
export const TestDriveForm = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [, setIsOpenSuccess] = useSuccessDialog();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TestDriveState>({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			phone: '',
			checked: true,
		},
	});

	const onSubmit = async (data: TestDriveState) => {
		let number = data.phone.replace(/\D/g, '');

		try {
			setIsLoading(true);
			const res = await sendForm({ ...data, phone: '+' + number });

			if (!res.ok) {
				return setError(
					'Произошла непредвиденная ошибка, попробуйте перезагрузить страницу и отправить запрос еще раз',
				);
			}

			setError(null);
			reset();
			setIsOpenSuccess?.(true);
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='block w-full text-center md:flex md:flex-wrap md:justify-between'
		>
			<label className='block w-[220px] mb-4 mx-auto md:mb-5 md:w-[230px] xl:w-[350px] xl:ms-0'>
				<input
					className='w-full p-3 border border-[#979797] rounded-lg xl:p-4 text-base/normal xl:text-lg/normal'
					type='text'
					placeholder='Имя'
					{...register('name', {
						required: 'Поле обязательно для заполнения',
						minLength: {
							value: 3,
							message: 'Минимальная длина имени 3 символа',
						},
					})}
				/>
				{errors.name && (
					<p className='text-red-500 w-full text-start'>{errors.name.message}</p>
				)}
			</label>

			<label className='block w-[220px] mb-4 mx-auto md:mb-5 md:w-[230px] xl:w-[350px] '>
				<InputMask
					mask='+7 (___) ___-__-__'
					replacement={{ _: /\d/ }}
					placeholder='Телефон'
					// showMask
					{...register('phone')}
					className='w-full p-3 border border-[#979797] rounded-lg xl:p-4 text-base/normal xl:text-lg/normal'
				/>
				{errors.phone && (
					<p className='text-red-500 w-full text-start'>{errors.phone.message}</p>
				)}
			</label>

			{error && <p className='text-red-500 w-full text-start'>{error}</p>}

			<button
				className='flex items-center justify-center rounded-[35px] font-bold text-white bg-gradient-to-b from-[#ac0039] to-[#e3004c] px-5 py-3 mx-auto mb-4 text-sm/normal h-[50px] xl:h-[60px] w-[220px] md:w-[230px] md:mb-5 md:mr-0 xl:w-[310px] xl:text-lg/normal xl:p-4 disabled:opacity-50'
				disabled={!!errors.name || !!errors.phone || !!errors.checked || isLoading}
				type='submit'
			>
				Получить тест-драйв
			</button>

			<label className='block relative ps-6'>
				<input
					type='checkbox'
					className='absolute top-[45%] md:top-1.5 left-1 '
					{...register('checked', { required: true })}
				/>
				<span className='text-[#7f7f7f] text-start font-light text-xs/normal md:text-base/normal'>
					Подтверждаю, что я ознакомлен с Политикой конфиденциальности и даю свое согласие
					на сбор и обработку персональных данных
				</span>
			</label>
		</form>
	);
};
