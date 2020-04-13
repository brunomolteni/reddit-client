import { useSelector } from "react-redux";
import { useActions } from "./";
{{#if fetch }}
import { useSWR } from 'swr';
{{/if}}

import { actions } from '../reducers/{{ camelCase name }}Slice';


export const use{{ pascalCase name }}Slice = () => {
{{#if fetch }}
    const { data, mutate } = useSWR('/api/get');
    
{{/if}}
    const state = useSelector((state) => state.{{ camelCase name }});
    const bindedActions = useActions(actions);
    
    return [state, bindedActions];
};
  