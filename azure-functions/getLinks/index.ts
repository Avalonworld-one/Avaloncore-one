import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    // Define your list of links
    const links = [
        {
            id: "1",
            title: "Watch Avalon",
            description: "Watch the introduction video.",
            url: "https://youtu.be/AAbokV76tkU"
        },
        {
            id: "2",
            title: "Whitepaper",
            description: "Read our whitepaper.",
            url: "https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2"
        }
    ];

    // Return the list of links as the response
    context.res = {
        status: 200,
        body: links,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

export default httpTrigger;
