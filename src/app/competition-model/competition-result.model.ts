import { Competitor } from './competitor.model';

export class CompetitionResult {
    public wsCompetitor: Competitor ;
    public accumulatedPoints: number;
    public ranking: number;

    constructor(competitor: Competitor, accumulatedPoints: number,
        ranking: number) {
            this.competitor = competitor;
            this.accumulatedPoints = accumulatedPoints;
            this.ranking = ranking;
        }
}