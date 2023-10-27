import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const handleClick = (element) => {
		setIsResult(false);
		if (operator === '' && NUMS.includes(element)) {
			setOperand1(operand1 + element);
		}
		if (element === '+') {
			setOperator('+');
		}
		if (element === '-') {
			setOperator('-');
		}

		if (operator !== '' && NUMS.includes(element)) {
			setOperand2(operand2 + element);
		}

		if (element === '=') {
			if (operand2 !== '' && operator === '+') {
				setIsResult(true);
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
			}
			if (operand2 !== '' && operator === '-') {
				setIsResult(true);
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
			}
		}

		if (element === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
		}
	};

	return (
		<div className={styles.app}>
			<header className={styles.container}>
				{/* <h1>Калькулятор</h1> */}
				<div className={styles.clacBody}>
					<div className={isResult ? styles.result : styles.display}>
						<span>{operand1 === '' ? '0' : operand1}</span>
						<span>{operator}</span>
						<span>{operand2}</span>
					</div>
					<div className={styles.buttons}>
						<div className={styles.numbers}>
							{NUMS.map((num, index) => {
								return (
									<button
										key={index}
										onClick={(event) =>
											handleClick(event.target.innerHTML)
										}
									>
										{num}
									</button>
								);
							})}
						</div>
						<div className={styles.operators}>
							<button
								onClick={(event) => handleClick(event.target.innerHTML)}
							>
								+
							</button>
							<button
								onClick={(event) => handleClick(event.target.innerHTML)}
							>
								-
							</button>
							<button
								onClick={(event) => handleClick(event.target.innerHTML)}
							>
								=
							</button>
							<button
								onClick={(event) => handleClick(event.target.innerHTML)}
							>
								C
							</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};