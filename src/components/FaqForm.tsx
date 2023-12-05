import { InputMask } from '@react-input/mask';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendForm } from '@/api';
import { LegalModal } from './LegalModal';

interface FaqFormState {
	name: string;
	phone: string;
	notes?: string;
}

export const FaqForm = ({ onSuccess }: { onSuccess?: () => void }) => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FaqFormState>({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			phone: '',
			notes: '',
		},
	});

	const onSubmit = async (data: FaqFormState) => {
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
			onSuccess?.();
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5 py-6 px-10'>
			<label className='flex flex-col items-start justify-start gap-y-1'>
				Имя
				<input
					{...register('name', {
						required: 'Поле обязательно для заполнения',
						minLength: {
							value: 3,
							message: 'Минимальная длина имени 3 символа',
						},
					})}
					type='text'
					className='w-full px-4 py-3 border border-gray-300 rounded-lg'
				/>
				{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
			</label>
			<label className='flex flex-col items-start justify-start gap-y-1'>
				Телефон
				<InputMask
					mask='+7 (___) ___-__-__'
					replacement={{ _: /\d/ }}
					showMask
					{...register('phone')}
					className='w-full px-4 py-3 border border-gray-300 rounded-lg'
				/>
				{errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
			</label>
			<textarea
				{...register('notes')}
				placeholder='Опишите вашу проблему'
				className='w-full px-4 py-3 border border-gray-300 rounded-lg'
			/>

			{error && <p className='text-red-500'>{error}</p>}
			<button
				disabled={!!errors.name || !!errors.phone || isLoading}
				type='submit'
				className='mx-auto px-5 py-3 text-white bg-gradient-to-t from-[#e30e00] to-[#ac0600] rounded-full text-center text-lg/normal font-normal disabled:opacity-50'
			>
				{isLoading ? 'Отправка...' : 'Задать вопрос'}
			</button>

			<p className='text-xs text-start'>
				Нажимая на кнопку, Вы подтверждаете, что ознакомились с{' '}
				<LegalModal trigger='Политикой конфиденциальности' /> и даете согласие на обработку
				персональных данных
			</p>
		</form>
	);
};
