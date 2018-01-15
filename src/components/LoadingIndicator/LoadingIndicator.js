import React from 'react'
import { CircularProgress } from 'material-ui/Progress';

const styles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 99999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const LoadingIndicator = ({ isLoading }) => (
    isLoading
        ?
        <div style={styles}>
            <CircularProgress size={80} />
        </div>
        :
        null
)

export default LoadingIndicator