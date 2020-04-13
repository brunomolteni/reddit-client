{{#if hooks }}
import React, { useState, useEffect } from 'react'
{{else}}
import React from 'react'
{{/if}}
{{#if css }}
import styles from './{{ pascalCase name }}.css'
{{/if}}

export default function {{ pascalCase name }}() {
{{#if hooks }}
    const [data, setData] = useState(false);

    useEffect(() => {
        // do something...
    }, [data]);
    
{{/if}}
    return (
{{#if css }}
        <div className={styles.example}>
{{else}}
        <div>
{{/if}}
            {{ pascalCase name }} is working!
        </div>
    )
}