"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
function convertToDate(dateString) {
    var dataParts = dateString.split('/');
    return new Date(parseInt(dataParts[2]), parseInt(dataParts[1]) - 1, parseInt(dataParts[0]));
}
var CSVFileLoader = /** @class */ (function () {
    function CSVFileLoader() {
    }
    CSVFileLoader.prototype.load = function (fileName) {
        return fs
            .readFileSync(fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) { return row.split(','); });
    };
    return CSVFileLoader;
}());
var MatchesReader = /** @class */ (function () {
    function MatchesReader() {
        this.dataLoader = new CSVFileLoader();
    }
    MatchesReader.prototype.read = function (fileName) {
        return this.dataLoader.load(fileName).map(function (row) {
            return {
                date: convertToDate(row[0]),
                homeTeam: row[1],
                awayTeam: row[2],
                homeScore: parseInt(row[3]),
                awayScore: parseInt(row[4]),
                matchResult: row[5],
                referee: row[6]
            };
        });
    };
    return MatchesReader;
}());
var Match = /** @class */ (function () {
    function Match() {
    }
    return Match;
}());
var matches = new MatchesReader().read('football.csv');
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team, matches) {
        this.team = team;
        this.matches = matches;
    }
    WinsAnalysis.prototype.run = function () {
        var wins = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match.homeTeam === this.team && match.matchResult === MatchResult.HomeWin) {
                wins++;
            }
            else if (match.awayTeam === this.team &&
                match.matchResult === MatchResult.AwayWin) {
                wins++;
            }
        }
        return this.team + " wins " + wins + " games!";
    };
    return WinsAnalysis;
}());
var analysis = new WinsAnalysis('Man United', matches);
console.log(analysis.run());
