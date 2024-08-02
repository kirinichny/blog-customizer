import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

interface ArrowButtonProps {
	isOpen: boolean;
	onClick: OnClick;
}

export const ArrowButton = (props: ArrowButtonProps) => {
	const { isOpen, onClick } = props;

	const ariaLabelText = isOpen
		? 'Закрыть форму параметров статьи'
		: 'Открыть форму параметров статьи';

	const containerClassName = clsx(styles.container, {
		[styles.container_open]: isOpen,
	});
	const arrowClassName = clsx(styles.arrow, { [styles.arrow_open]: isOpen });

	return (
		<div
			role='button'
			aria-label={ariaLabelText}
			tabIndex={0}
			className={containerClassName}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={arrowClassName} />
		</div>
	);
};
