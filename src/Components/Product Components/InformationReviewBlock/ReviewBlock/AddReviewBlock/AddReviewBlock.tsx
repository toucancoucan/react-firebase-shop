import React from "react";
import styles from "./AddReviewBlock.module.scss";
import {useForm} from "react-hook-form";
import {addReviewToProduct} from "../../../../../Firebase/Queries/addReviewToProduct";
import BlackButton from "../../../../Common/BlackButton/BlackButton";
import AddReviewSubHeader from "./AddReviewSubHeader/AddReviewSubHeader";
import combineClassNames from "../../../../../Functions/сombineClassNames";
import RatingRadio from "./RatingRadio/RatingRadio";
import CONSTANTS from "../../../../../Constants/CONSTANTS";
import {rootState} from "../../../../../Reducers/store";
import {connect} from "react-redux";


type mapStateToProps = {
    productId: number
}

type mapDispatchToProps = {
    addReview: addReviewToProduct,
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
    const onSubmit = (data: any) => {
        console.log(data);
        console.log(props.productId);
        addReviewToProduct(data, props.productId)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <div className={styles.header}>
                ADD A REVIEW
            </div>
            <div className={styles.marginY}>

                <label>
                    <AddReviewSubHeader text={"Your rating"} errorText={"Please enter your rating"}
                                        showError={errors.rating}/>
                    <RatingRadio register={register({required: true})}/>
                </label>
            </div>

            <div className={styles.marginY}>
                <label>
                    <AddReviewSubHeader text={"Your review"} errorText={"Please enter your review"}
                                        showError={errors.text}/>
                    <textarea
                        className={combineClassNames(styles.defaultForm, styles.textArea, errors.text ? styles.error : '')}
                        name="text"
                        ref={register({required: true})}/>
                </label>
            </div>


            <div className={styles.formRow}>
                <label className={styles.marginY}>
                    <AddReviewSubHeader text={"Your name"} errorText={"Please enter your real name"}
                                        showError={errors.name}/>
                    <input className={combineClassNames(styles.defaultForm, errors.name ? styles.error : '')}
                           type="text" name="name"
                           ref={register({required: true, pattern: CONSTANTS.PRODUCT_SCREEN.REVIEW.NAME_REGEX})}/>
                </label>
                <label className={styles.marginY}>
                    <AddReviewSubHeader text={"Your email"} errorText={"Please enter valid email"}
                                        showError={errors.email}/>
                    <input className={combineClassNames(styles.defaultForm, errors.email ? styles.error : '')}
                           type="text" name="email"
                           ref={register({required: true, pattern: CONSTANTS.PRODUCT_SCREEN.REVIEW.EMAIL_REGEX})}/>
                </label>
            </div>
            <div className={combineClassNames(styles.buttonRow, styles.marginY)}>
                <BlackButton text={"Submit"} type={"submit"}/>
            </div>
        </form>
    )
}


let AddReviewBlockWrap: React.FC<mapStateToProps> = (props) =>
    <_AddReviewBlock productId={props.productId} addReview={addReviewToProduct}/>

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        productId: state.ProductReducer.item.id
    }
};


let AddReviewBlock = connect<mapStateToProps, null, any, any>(mapStateToProps, null)(AddReviewBlockWrap)

export default AddReviewBlock;
