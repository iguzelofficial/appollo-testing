import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
const EXCHANGE_RATES = gql`query {
    games {
      get {
        items {
          name,
          imagePath
        }
      },
      getGameDificults {
        items {
          difficultyName
        }
      }
    }
  }`;

const INCREMENT_COUNTER = gql`
mutation($team: CreateTeamInputFormInput)
{
  createTeam(team: $team)
}
`;
export const ExchangeRates = () => {

  const [createTeam, { data, loading, error }] = useMutation(INCREMENT_COUNTER);

  //const { loading, error, data } = useQuery(EXCHANGE_RATES);


  return <div>
      {
        JSON.stringify({loading,error,data})
      }
    <button onClick={() => {
      createTeam({
        variables: {
          team: {
            "gameId": "11a30bed-fdd1-4f46-80e2-ae9e0701f937",
            "teamName": "124323",
            "teamTag": "sadadads"
          }
        }
      });

    }}>
      Create All
    </button>
    {
      JSON.stringify(data)
    }
  </div>

  return <div>
    {
      JSON.stringify(data)
    }
  </div>
}
export default ExchangeRates