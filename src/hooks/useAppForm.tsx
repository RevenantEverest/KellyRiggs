import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/context/formContext';
import TextField from '@/components/common/inputs/TextInput';
import TextAreaField from '@/components/common/inputs/TextArea';
import SubscribeField from '@/components/common/inputs/SubscribeButton';

export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        TextField,
        TextAreaField
    },
    formComponents: {
        SubscribeField
    },
    fieldContext,
    formContext
});