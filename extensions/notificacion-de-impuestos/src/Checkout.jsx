import {
  Banner,
  //useApi,
  //useTranslate,
  reactExtension,
  useSettings,
  useShippingAddress, useBillingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {titulo: titulo, descripcion: descripcion, status: status} = useSettings();

  return (
    <Banner title={titulo} status={status}>
      {descripcion}
    </Banner>
  );
}