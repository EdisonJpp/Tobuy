import React from 'react';

const Modal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" >Small modal</button>

            <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        ...
    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal ;