import { events } from "./helpers/events";

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(events),
  };
}
