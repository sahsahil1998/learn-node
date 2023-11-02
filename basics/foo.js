const args = process.argv;
if (args.length > 2) {
    args.slice(2).forEach((arg) => {
        console.log(arg);
    });
} else {
    console.log('Args not found');
}