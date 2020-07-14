import React, {useEffect, useRef} from 'react'
import {Field, Form, reduxForm} from 'redux-form'
import {IoIosSearch} from 'react-icons/io';
import {connect} from "react-redux";
import {changeShowSearch, getSearchValue} from "../../../Reducers/NavBarReducer";
import styles from "./NavBarSearch.module.scss"
import {IconContext} from "react-icons";

let _Search: React.FC<any> = (props) => {
    let textInputRef: any = useRef(null);
    useEffect(() => {
        textInputRef.current.focus();
    })
    let searchField = (field: any) => (
        <input placeholder={"Search..."} className={styles.field} {...field.input} type={"text"} ref={textInputRef}/>
    )
    return (
        <Form onSubmit={props.handleSubmit} onBlur={props.handleSubmit} className={styles.form}>
            <div className={styles.container}>
                <Field name="searchField" component={searchField}/>
                <button type="submit" className={styles.fieldIcon}>
                    <IconContext.Provider value={{className: styles.icon}}>
                        <IoIosSearch/>
                    </IconContext.Provider>
                </button>
            </div>
        </Form>
    )
}

const _privateSearchWrapper = connect<any, any, any, any>(() => {
        return {}
    },
    {
        changeShowSearch,
        getSearchValue
    },
)(_Search);

let NavBarSearch = reduxForm({
    form: 'NavBarSearch',
})(_privateSearchWrapper)

export default NavBarSearch;