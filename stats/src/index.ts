import * as fs from 'fs';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

function convertToDate(dateString: string): Date {
  const dataParts = dateString.split('/');

  return new Date(
    parseInt(dataParts[2]),
    parseInt(dataParts[1]) - 1,
    parseInt(dataParts[0])
  );
}

interface DataLoader {
  load(fileName): string[][];
}

class CSVFileLoader implements DataLoader {
  load(fileName: string): string[][] {
    return fs
      .readFileSync(fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

class MatchesReader {
  private dataLoader: DataLoader;
  constructor() {
    this.dataLoader = new CSVFileLoader();
  }

  read(fileName): Match[] {
    return this.dataLoader.load(fileName).map(
      (row: string[]): Match => {
        return {
          date: convertToDate(row[0]),
          homeTeam: row[1],
          awayTeam: row[2],
          homeScore: parseInt(row[3]),
          awayScore: parseInt(row[4]),
          matchResult: row[5] as MatchResult,
          referee: row[6]
        } as Match;
      }
    );
  }
}

class Match {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchResult: MatchResult;
  referee: string;
}


const matches = new MatchesReader().read('football.csv');

class WinsAnalysis {
    constructor(private team:string, private matches: Match[]) {}
    run(): string {
      let wins = 0;

      for (let match of this.matches) {
        if (match.homeTeam === this.team && match.matchResult === MatchResult.HomeWin) {
          wins++;
        } else if (
          match.awayTeam === this.team &&
          match.matchResult === MatchResult.AwayWin
        ) {
          wins++;
        }
      }
    
      return `${this.team} wins ${wins} games!`;
    }
}


const analysis = new WinsAnalysis('Man United', matches);
console.log(analysis.run());