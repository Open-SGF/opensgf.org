import { ReactElement } from 'react';
import styles from './CardSet.module.css';
import {Card} from './components/TextAndButtonCard/Card'

interface ICardSet {
    volunteerCard: ReactElement;
    partnerCard: ReactElement
}

export const CardSet = ({volunteerCard, partnerCard}: ICardSet) => {
    return (
        <div className={styles.cardSetContainer}>
            <div className={styles.cards}>
                {volunteerCard}
                {partnerCard}
            </div>
        </div>
    )
}

////////////////////////////////////////////////
// This is the code to use this component for the volunteer card and partner card set.
////////////////////////////////////////////////

// const contactButton = <Button text='Contact' href='/' />

// const volunteerCard = (
// <Card heading='Volunteer With Us' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste recusandae quam aliquam vel porro aliquid sapiente perferendis, autem delectus repellat eveniet laboriosam voluptas. Magni nobis rerum ipsa perspiciatis veritatis.' button={contactButton} />
// );

// const partnerCard = (
// <Card heading='Partner With Us' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste recusandae quam aliquam vel porro aliquid sapiente perferendis, autem delectus repellat eveniet laboriosam voluptas. Magni nobis rerum ipsa perspiciatis veritatis.' button={contactButton} />
// );

// <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />