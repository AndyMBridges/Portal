//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import AppSelectors from '../selectors/apps';
import LoginSelectors from '../selectors/login';
import {loadApp} from '../actions/apps';
import {updateApp} from '../actions/updateApp';
import {Loading} from '../components/Loading';
import {Button, ButtonSecondary, Input, Form, Text} from '../theme/Form';
import {Image, Title, ContentWrap, ContentItem} from '../theme/GlobalStyle';

type Content = {
    created: string,
    id: string,
    logo: string,
    name: string
}

type TestProps = {
    getApps: {
        items: Array<Content>,
        loading: boolean
    },
    loadApp: () => void,
    updateApp: (string, string) => void
}

class App extends Component<TestProps> {

    componentDidMount() {
        this.props.loadApp();
    }

    updateClick(appId, name) {
        this.props.updateApp(appId, name);
        this.props.loadApp();
    }

    renderApp(app) {

        const {id, logo, name} = app;

        return (
            <ContentItem key={id}>
                {logo && <Image src={logo} alt={name} />}
                {name && <h2>{name}</h2>}
                <Formik
                    initialValues={{name: ''}}
                    validate={values => {
                        let errors = {};

                        if (!values.name) {
                            errors.name = 'Enter new app name';
                        }
                        return errors;

                    }}
                    onSubmit={values => {
                        this.updateClick(id, values.name);
                    }}
                    render={({
                        errors,
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                border={errors.name && '1px solid red'}
                                type="text"
                                name="name"
                                placeholder="Update app name"
                            />
                            {errors.name && <Text color="red">{errors.name}</Text>}
                            <Button type="submit">Update app name</Button>
                        </Form>
                    )}
                />
                <ButtonSecondary to={`/apps/${id}`}>View app users</ButtonSecondary>
            </ContentItem>
        );
    }

    render() {

        const {getApps} = this.props;

        return (
            <div>
                <Title>Apps</Title>
                {getApps && getApps.items ?
                    <ContentWrap>{getApps.items.map(app => this.renderApp(app))}</ContentWrap> : <Loading />}
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        getApps: AppSelectors.getApps(state),
        getLogin: LoginSelectors.getLogin(state)
    };
};

const mapDispatchToProps = dispatch => ({
    loadApp: () => dispatch(loadApp(dispatch)),
    updateApp: (appId, name) => dispatch(updateApp(appId, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
