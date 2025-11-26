import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../components/ui";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../components/forms/FormInput";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/accountSelectors";
import { editPersonalInformation } from "../store/accountActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { editPersonalInfoSchema } from "../components/forms/validation/editPersonalInfoSchema";
import { AppDispatch } from "../store/store";

type EditPersonalInfoFormData = {
  fullName: string;
  phoneNumber: string;
};

export const EditPersonalInfoScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fullName, phoneNumber } = useSelector(selectUser);

  const methods = useForm<EditPersonalInfoFormData>({
    mode: "onChange",
    resolver: yupResolver(editPersonalInfoSchema),
    defaultValues: {
      fullName: fullName ?? "",
      phoneNumber: phoneNumber ?? "",
    },
  });

  //waiting API for checking user changes
  {
    /*useEffect(() => {
    methods.reset({
      fullName: user?.fullName || "",
      phoneNumber: user?.phoneNumber || "",
    });
  }, [user, methods]);*/
  }
  const { handleSubmit, formState } = methods;
  const onSubmit = (data: EditPersonalInfoFormData) => {
    dispatch(
      editPersonalInformation({
        fullName: data.fullName || undefined,
        phoneNumber: data.phoneNumber || undefined,
      })
    );
    console.log("Saved:", data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="m"
        backgroundColor="mainBackground"
      >
        <FormProvider {...methods}>
          <Box width="100%" gap="m">
            <FormInput
              name="fullName"
              placeholder="Full Name"
              label="Full Name"
              autoComplete="name"
              textContentType="name"
            />
            <FormInput
              name="phoneNumber"
              placeholder="Phone Number (e.g. +375291231412)"
              keyboardType="phone-pad"
              label="Phone Number"
              autoComplete="tel"
              textContentType="telephoneNumber"
            />
            <Button
              label="Change personal information"
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              disabled={!formState.isValid}
            />
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
