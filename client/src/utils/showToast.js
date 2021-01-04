import ReactDOM from 'react-dom';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
function showToast(error, onClose, severity){
    return ReactDOM.createPortal(
        <Snackbar
            open={error}
            autoHideDuration={3000}
            onClose={onClose}
        >
            <Alert severity={severity}>
                {error}
            </Alert>
        </Snackbar>
        , document.getElementById('root'),
    )
}
export {showToast}
