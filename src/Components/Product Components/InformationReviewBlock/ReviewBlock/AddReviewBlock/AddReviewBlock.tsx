import React from "react";
import styles from "./AddReviewBlock.module.scss";
import {useForm} from "react-hook-form";
import {addReviewToProduct} from "../../../../../Functions/addReviewToProduct";
import BlackButton from "../../../../Common/BlackButton/BlackButton";
import AddReviewSubHeader from "./AddReviewSubHeader/AddReviewSubHeader";
import combineClassNames from "../../../../../Functions/сombineClassNames";
import RatingRadio from "./RatingRadio/RatingRadio";


type mapStateToProps = {}

type mapDispatchToProps = {
    addReview: addReviewToProduct
}

type propsType = mapStateToProps & mapDispatchToProps;

type Inputs = {
    rating: 1 | 2 | 3 | 4 | 5,
    text: string,
    name: string,
    email: string
};


let _AddReviewBlock: React.FC<propsType> = (props) => {

    const {register, handleSubmit, watch, errors} = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <div className={styles.header}>
                ADD A REVIEW
            </div>
            <div className={styles.marginY}>

                <label>
                    <AddReviewSubHeader text={"Your rating"}/>
                    <RatingRadio register={register}/>
                </label>
            </div>

            <div className={styles.marginY}>
                <label>
                    <AddReviewSubHeader text={"Your review"}/>
                    <textarea className={combineClassNames(styles.defaultForm, styles.textArea)} name="text"
                              ref={register}/>
                </label>
            </div>


            <div className={styles.formRow}>
                <label className={styles.marginY}>
                    <AddReviewSubHeader text={"Your name"}/>
                    <input className={styles.defaultForm} type="text" name="name" ref={register}/>
                </label>
                <label className={styles.marginY}>
                    <AddReviewSubHeader text={"Your email"}/>
                    <input className={styles.defaultForm} type="text" name="email" ref={register}/>
                </label>
            </div>
            <div className={combineClassNames(styles.buttonRow, styles.marginY)}>
                <BlackButton text={"Submit"} type={"submit"}/>
            </div>
        </form>
    )
}


let AddReviewBlock: React.FC<any> = () => <_AddReviewBlock addReview={addReviewToProduct}/>

export default AddReviewBlock;
