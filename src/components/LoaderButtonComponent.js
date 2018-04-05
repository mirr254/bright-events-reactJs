import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import '../assets/loaderButton.css';

export default ({
    isLoading,
    text,
    loadingText,
    className = "",
    disabled = false,
    ...props
  }) =>
    <Button
        className={`loader-button ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
        {!isLoading ? text : loadingText}
    </Button>;