// building a simple calculator

process.stdout.write("simple calculator")
process.stdout.write("\n Enter an express (e.g., 2+3)\n")
process.stdin.setEncoding('utf-8')
process.stdin.on('data',(data)=>{
    const expr=data.trim();
    if(expr.toLowerCase() === 'exit'){
        process.stdout.write('goodbye\n');
        process.exit(0);
    }

    try{
        const result= eval(expr);
        console.log(`result: ${result}`)
    }catch(err){
        console.log(`invalid expression ${expr}`)
    }
    console.log('enter another expression or type exit')
})



