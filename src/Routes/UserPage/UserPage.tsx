import Layout from '../../Components/Layout/Layout';
import {
  AccountInfoCard,
  AccountInfoWrap,
  Balance,
  BalanceText,
  Currency,
  TFButton,
  TFI,
  TFSpan,
  Transactions,
  TransactionsCell,
  TransactionsCol,
  TransactionsFooter,
  UPH1,
  UPHButton,
  UPHHeader,
  UPHNavLink,
  UserInfo,
  UserPageWrapper,
  Welcome,
} from './UserPage.styles';

const UserPage = () => {
  return (
    <Layout>
      <UserPageWrapper>
        {/* User Info */}
        <UserInfo>
          <Welcome>Welcome Back Samuel</Welcome>
          <BalanceText>Your Balance</BalanceText>
          <AccountInfoWrap>
            <AccountInfoCard>
              <Currency>Naira</Currency>
              <Balance>&#8358;300.00</Balance>
            </AccountInfoCard>
            <AccountInfoCard>
              <Currency>USDollars</Currency>
              <Balance>&#36;300.00</Balance>
            </AccountInfoCard>
            <AccountInfoCard>
              <Currency>Euros</Currency>
              <Balance>&euro;300.00</Balance>
            </AccountInfoCard>
          </AccountInfoWrap>
        </UserInfo>
        {/* Transactions Header */}
        <UPHHeader>
          <UPH1>Transactions</UPH1>
          <UPHButton>
            <UPHNavLink to="#">New Transaction</UPHNavLink>
          </UPHButton>
        </UPHHeader>

        {/* Transactions Section */}
        <Transactions>
          {/* Transactions Head */}
          <TransactionsCol>ID</TransactionsCol>
          <TransactionsCol>From</TransactionsCol>
          <TransactionsCol>To</TransactionsCol>
          <TransactionsCol>Value</TransactionsCol>
          <TransactionsCol>Currency</TransactionsCol>
          <TransactionsCol>Created At</TransactionsCol>
          <TransactionsCol>Updated At</TransactionsCol>

          {/* Transactions  */}

          <TransactionsCell>1</TransactionsCell>
          <TransactionsCell>John</TransactionsCell>
          <TransactionsCell>You</TransactionsCell>
          <TransactionsCell>+500.00</TransactionsCell>
          <TransactionsCell>EUR</TransactionsCell>
          <TransactionsCell>Apr 16, 2022</TransactionsCell>
          <TransactionsCell>Apr 17, 2022</TransactionsCell>

          <TransactionsCell>2</TransactionsCell>
          <TransactionsCell>Luke</TransactionsCell>
          <TransactionsCell>You</TransactionsCell>
          <TransactionsCell>+700.00</TransactionsCell>
          <TransactionsCell>CAD</TransactionsCell>
          <TransactionsCell>Apr 19, 2022</TransactionsCell>
          <TransactionsCell>Apr 21, 2022</TransactionsCell>

          <TransactionsCell>3</TransactionsCell>
          <TransactionsCell>You</TransactionsCell>
          <TransactionsCell>John</TransactionsCell>
          <TransactionsCell>+200.00</TransactionsCell>
          <TransactionsCell>NGN</TransactionsCell>
          <TransactionsCell>Apr 20, 2022</TransactionsCell>
          <TransactionsCell>Apr 22, 2022</TransactionsCell>
        </Transactions>

        {/* Transactions Footer */}
        <TransactionsFooter>
          <TFButton>
            <TFSpan>More</TFSpan>{' '}
            <TFI className="fa fa-angle-down" aria-hidden="true"></TFI>
          </TFButton>
        </TransactionsFooter>
      </UserPageWrapper>
    </Layout>
  );
};

export default UserPage;
