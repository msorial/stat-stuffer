import { ReactElement } from 'react';
import {
  ATL,
  BOS,
  BKN,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
} from 'react-nba-logos';

export interface TeamLogosProps {
  team: string;
  logo: ReactElement;
}

export const TeamLogos: TeamLogosProps[] = [
  {
    team: 'ATL',
    logo: <ATL size={50} />,
  },
  {
    team: 'BOS',
    logo: <BOS size={50} />,
  },
  {
    team: 'BKN',
    logo: <BKN size={50} />,
  },
  {
    team: 'CHA',
    logo: <CHA size={50} />,
  },
  {
    team: 'CHI',
    logo: <CHI size={50} />,
  },
  {
    team: 'CLE',
    logo: <CLE size={50} />,
  },
  {
    team: 'DAL',
    logo: <DAL size={50} />,
  },
  {
    team: 'DEN',
    logo: <DEN size={50} />,
  },
  {
    team: 'DET',
    logo: <DET size={50} />,
  },
  {
    team: 'GSW',
    logo: <GSW size={50} />,
  },
  {
    team: 'HOU',
    logo: <HOU size={50} />,
  },
  {
    team: 'IND',
    logo: <IND size={50} />,
  },
  {
    team: 'LAC',
    logo: <LAC size={50} />,
  },
  {
    team: 'LAL',
    logo: <LAL size={50} />,
  },
  {
    team: 'MEM',
    logo: <MEM size={50} />,
  },
  {
    team: 'MIA',
    logo: <MIA size={50} />,
  },
  {
    team: 'MIL',
    logo: <MIL size={50} />,
  },
  {
    team: 'MIN',
    logo: <MIN size={50} />,
  },
  {
    team: 'NOP',
    logo: <NOP size={50} />,
  },
  {
    team: 'NYK',
    logo: <NYK size={50} />,
  },
  {
    team: 'OKC',
    logo: <OKC size={50} />,
  },
  {
    team: 'ORL',
    logo: <ORL size={50} />,
  },
  {
    team: 'PHI',
    logo: <PHI size={50} />,
  },
  {
    team: 'PHX',
    logo: <PHX size={50} />,
  },
  {
    team: 'POR',
    logo: <POR size={50} />,
  },
  {
    team: 'SAC',
    logo: <SAC size={50} />,
  },
  {
    team: 'SAS',
    logo: <SAS size={50} />,
  },
  {
    team: 'TOR',
    logo: <TOR size={50} />,
  },
  {
    team: 'UTA',
    logo: <UTA size={50} />,
  },
  {
    team: 'WAS',
    logo: <WAS size={50} />,
  },
];
