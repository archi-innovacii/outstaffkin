'use client';

import { InputMask } from '@react-input/mask';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSuccessDialog } from '@/Providers/SuccessModalProvider';
import { sendForm } from '@/api';

interface FooterFormState {
	name: string;
	phone: string;
	message?: string;
	checked: boolean;
}

export const FooterForm = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [, setIsOpenSuccess] = useSuccessDialog();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FooterFormState>({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			phone: '',
			message: '',
			checked: true,
		},
	});

	const onSubmit = async (data: FooterFormState) => {
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
			className='w-full text-center md:flex md:flex-wrap md:justify-between'
		>
			<input
				className='mb-3 p-2 border border-[#6d7481] bg-[#fafcff] text-black text-sm/normal font-normal w-full'
				placeholder='Имя'
				{...register('name', {
					required: 'Поле обязательно для заполнения',
					minLength: {
						value: 3,
						message: 'Минимальная длина имени 3 символа',
					},
				})}
			/>
			<InputMask
				mask='+7 (___) ___-__-__'
				replacement={{ _: /\d/ }}
				showMask
				placeholder='Телефон'
				{...register('phone')}
				className='mb-3 p-2 border border-[#6d7481] bg-[#fafcff] text-black text-sm/normal font-normal w-full'
			/>
			<textarea
				className='mb-3 p-2 border border-[#6d7481] bg-[#fafcff] text-black text-sm/normal font-normal w-full'
				placeholder='Cообщение'
			/>
			<label className='block mb-5 ps-6 relative'>
				<input
					type='checkbox'
					className='absolute top-1 left-1 '
					{...register('checked', { required: true })}
				/>
				<span className='block text-start font-light text-xs/normal'>
					Подтверждаю, что я ознакомлен с <span>Политикой конфиденциальности </span> и даю
					свое согласие на сбор и обработку персональных данных
					<br />
					{errors.checked && (
						<span className='text-black'>Требуется согласие для отправки</span>
					)}
				</span>
			</label>

			{error && <span className='text-red-500'>{error}</span>}
			<button
				className='block w-[170px] mx-auto mb-3 p-3 bg-[#a9b4c8] rounded-full text-xs/normal md:text-lg/normal disabled:opacity-50'
				disabled={!!errors.name || !!errors.phone || !!errors.checked || isLoading}
				type='submit'
			>
				Отправить
			</button>
		</form>
	);
};
