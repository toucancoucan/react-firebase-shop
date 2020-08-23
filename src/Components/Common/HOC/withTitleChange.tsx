import React, {useEffect} from "react";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

type InjectedProps = {}


const withTitleChange = <T extends InjectedProps>(Component: React.ComponentType<T>, title: string = '') => {
    return (props: T) => {
        useEffect(() => {
            if (title)
                document.title = title;
        }, []);
        return (
            <Component {...props}/>
        );
    }
}


export default withTitleChange;
