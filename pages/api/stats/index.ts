import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const analyticsDataClient = new BetaAnalyticsDataClient({
    keyFilename: path.join(process.cwd(), "/lib/analytics/analytics.json"),
  });
  const propertyId = "284928395";
  let today = new Date().getTime() - 60 * 60 * 24 * 60 * 1000;
  let day = new Date(today).getDate();
  let month = new Date(today).getMonth() + 1;
  let year = new Date(today).getFullYear();

  let dayFormat = `${year}-${month}-${day}`;

  const totalReport = await analyticsDataClient.runReport({
    property: "properties/" + propertyId,
    dateRanges: [
      {
        startDate: dayFormat,
        endDate: "today",
      },
    ],

    metrics: [
      {
        name: "screenpageViews",
      },
      {
        name: "engagementRate",
      },
      {
        name: "totalUsers",
      },
    ],
  });

  return res.status(200).json({
    pageViews: totalReport[0].rows[0].metricValues[0].value,
    engagmentRate: totalReport[0].rows[0].metricValues[1].value,
    totalUsers: totalReport[0].rows[0].metricValues[2].value,
  });
}
