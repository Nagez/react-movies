import {StringSchema} from 'yup';

//required only in typescript
declare module 'yup'{
    class StringSchema {
        firstLetterUppercase(): this;
    }
}