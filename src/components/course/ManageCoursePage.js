import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            error: {}
        };
    }

    render() {
        return (
            <CourseForm
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.error}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProp(state, ownProps) {

    let course = {id: '', title: '', authorId: '', length: '', category: ''};

    return {
        course: course
        // state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProp, mapDispatchToProps)(ManageCoursePage);