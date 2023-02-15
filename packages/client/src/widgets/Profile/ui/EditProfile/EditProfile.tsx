import {FC} from 'react';
import {EditProfileTemplate} from 'entities/Profile/EditProfile';
import {ChangeBackground} from 'features/Profile/ChangeBackground';
import {ChangeAvatar} from 'features/Profile/ChangeAvatar';
import {Path, useForm} from "react-hook-form";
import {EditProfileForm} from "../../types";
import {yupResolver} from "@hookform/resolvers/yup";
import {editProfileSchema} from "../../lib/formSchemes";
import {createFieldValues, Helpers} from 'shared/helpers/others';
import {useCreateEditProfileValues} from "../../lib/hooks";
import {useDispatch} from "shared/types/redux";

const EditProfile: FC<{ close: () => void }> = ({close}) => {
    const initialValues = useCreateEditProfileValues()
    const form = useForm<EditProfileForm>({resolver: yupResolver(editProfileSchema), ...initialValues})
    const reg = createFieldValues<EditProfileForm>(form);
    const dispatch = useDispatch()
    const helpers = new Helpers()

    const onSubmit = (values: EditProfileForm) => {
        const difference = helpers.differenceBetweenObjects(initialValues.defaultValues, values)
        if (difference) {
            // dispatch(changeUserProfile(difference))
        }
        console.log(difference)
        close()
    }

    const valuesApi = (field: Path<EditProfileForm>) => {
        return {
            setValue(value: string) {
                form.setValue(field, value)
            },
            value: form.getValues()[field]
        }
    }

    return <EditProfileTemplate ChangeBackground={<ChangeBackground/>}
                                ChangeAvatar={<ChangeAvatar/>} submitForm={form.handleSubmit(onSubmit)}
                                close={close} reg={reg} valuesApi={valuesApi}/>;
};

export default EditProfile;
