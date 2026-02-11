import { calculateInvestmentResults  , formatter} from "../util/investment"; 

export default function Result({input}){
    const reustlData = calculateInvestmentResults(input)

    const initialInvestment = input.initialInvestment;


    console.log(reustlData)
    return (

        

       <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interst (Year)</th>
                <th>Total Interst</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {reustlData.map((data)=> {
                const totalInterst = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
                const totalInvestment = data.valueEndOfYear - totalInterst;
                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterst)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                </tr>
            })}
        </tbody>
       </table>
    );
}