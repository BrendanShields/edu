Translating code to a different programming language - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Translating code to a different programming language

Copilot Chat can help you rewrite code to perform the same operations but in a different programming language.

Copy as Markdown

## In this article

There are many reasons why you might want to move code from one programming language to another. Each programming language has its own strengths and weaknesses, and you might want to take advantage of features that are available in another language. For example, you might want to move code to a language that has better performance, or which uses strong typing to help prevent bugs.

For ease of maintaining code, you might want to move code to a language that is more widely used in your organization. For example, if few people in your organization know an older language such as Perl, you might want to move any Perl code that's still in use to a more commonly used language such as Python or JavaScript.

Copilot can help you translate code from one language to another. Translating a standalone file, such as a script, is straightforward. This process is described in this article.

Translating a project containing multiple files is a more complex process, and is described in [Using GitHub Copilot to migrate a project to another programming language](/en/copilot/tutorials/using-copilot-to-migrate-a-project).

## [Example scenario](#example-scenario)

The following Perl script prompts the user to enter the path to a text file. It checks what the user enters and if a text file is found at that path, it outputs a word count and character count for the contents of the file.

Perl

#!/usr/bin/perl
use strict;
use warnings;
use File::Spec;
use File::Basename;

print "Please enter the path to a local text file: ";
chomp(my $file\_path = <STDIN>);

if ($file\_path =~ /\[\`|;&<>(){}\\\[\\\]\]/ || !File::Spec->file\_name\_is\_absolute($file\_path) && dirname($file\_path) ne '.') {
    die "Invalid file path. Please provide a valid path.\\n";
}
if (!-e $file\_path) {
    die "File not found. Please provide an existing file path.\\n";
}

open(my $fh, '<', $file\_path) or die "Could not open file '$file\_path': $!\\n";

my $is\_binary = 0;
while (read($fh, my $buffer, 1024)) {
    if ($buffer =~ /\[^\\x09\\x0A\\x0D\\x20-\\x7E\]/) {
        $is\_binary = 1;
        last;
    }
}
close($fh);

if ($is\_binary) {
    die "The file '$file\_path' is a binary file. Please provide a text file.\\n";
}

open($fh, '<', $file\_path) or die "Could not open file '$file\_path': $!\\n";
my $content = do { local $/; <$fh> };
close($fh);

my $word\_count = scalar(split /\\s+/, $content);
my $char\_count = length($content);

print "The file '$file\_path' contains $word\_count words and $char\_count characters.\\n";

```perl
#!/usr/bin/perl
use strict;
use warnings;
use File::Spec;
use File::Basename;

print "Please enter the path to a local text file: ";
chomp(my $file_path = <STDIN>);

if ($file_path =~ /[`|;&<>(){}\[\]]/ || !File::Spec->file_name_is_absolute($file_path) && dirname($file_path) ne '.') {
    die "Invalid file path. Please provide a valid path.\n";
}
if (!-e $file_path) {
    die "File not found. Please provide an existing file path.\n";
}

open(my $fh, '<', $file_path) or die "Could not open file '$file_path': $!\n";

my $is_binary = 0;
while (read($fh, my $buffer, 1024)) {
    if ($buffer =~ /[^\x09\x0A\x0D\x20-\x7E]/) {
        $is_binary = 1;
        last;
    }
}
close($fh);

if ($is_binary) {
    die "The file '$file_path' is a binary file. Please provide a text file.\n";
}

open($fh, '<', $file_path) or die "Could not open file '$file_path': $!\n";
my $content = do { local $/; <$fh> };
close($fh);

my $word_count = scalar(split /\s+/, $content);
my $char_count = length($content);

print "The file '$file_path' contains $word_count words and $char_count characters.\n";
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=%23!%2Fusr%2Fbin%2Fperl%0Ause%20strict%3B%0Ause%20warnings%3B%0Ause%20File%3A%3ASpec%3B%0Ause%20File%3A%3ABasename%3B%0A%0Aprint%20%22Please%20enter%20the%20path%20to%20a%20local%20text%20file%3A%20%22%3B%0Achomp\(my%20%24file_path%20%3D%20%3CSTDIN%3E\)%3B%0A%0Aif%20\(%24file_path%20%3D~%20%2F%5B%60%7C%3B%26%3C%3E\(\)%7B%7D%5C%5B%5C%5D%5D%2F%20%7C%7C%20!File%3A%3ASpec-%3Efile_name_is_absolute\(%24file_path\)%20%26%26%20dirname\(%24file_path\)%20ne%20'.'\)%20%7B%0A%20%20%20%20die%20%22Invalid%20file%20path.%20Please%20provide%20a%20valid%20path.%5Cn%22%3B%0A%7D%0Aif%20\(!-e%20%24file_path\)%20%7B%0A%20%20%20%20die%20%22File%20not%20found.%20Please%20provide%20an%20existing%20file%20path.%5Cn%22%3B%0A%7D%0A%0Aopen\(my%20%24fh%2C%20'%3C'%2C%20%24file_path\)%20or%20die%20%22Could%20not%20open%20file%20'%24file_path'%3A%20%24!%5Cn%22%3B%0A%0Amy%20%24is_binary%20%3D%200%3B%0Awhile%20\(read\(%24fh%2C%20my%20%24buffer%2C%201024\)\)%20%7B%0A%20%20%20%20if%20\(%24buffer%20%3D~%20%2F%5B%5E%5Cx09%5Cx0A%5Cx0D%5Cx20-%5Cx7E%5D%2F\)%20%7B%0A%20%20%20%20%20%20%20%20%24is_binary%20%3D%201%3B%0A%20%20%20%20%20%20%20%20last%3B%0A%20%20%20%20%7D%0A%7D%0Aclose\(%24fh\)%3B%0A%0Aif%20\(%24is_binary\)%20%7B%0A%20%20%20%20die%20%22The%20file%20'%24file_path'%20is%20a%20binary%20file.%20Please%20provide%20a%20text%20file.%5Cn%22%3B%0A%7D%0A%0Aopen\(%24fh%2C%20'%3C'%2C%20%24file_path\)%20or%20die%20%22Could%20not%20open%20file%20'%24file_path'%3A%20%24!%5Cn%22%3B%0Amy%20%24content%20%3D%20do%20%7B%20local%20%24%2F%3B%20%3C%24fh%3E%20%7D%3B%0Aclose\(%24fh\)%3B%0A%0Amy%20%24word_count%20%3D%20scalar\(split%20%2F%5Cs%2B%2F%2C%20%24content\)%3B%0Amy%20%24char_count%20%3D%20length\(%24content\)%3B%0A%0Aprint%20%22The%20file%20'%24file_path'%20contains%20%24word_count%20words%20and%20%24char_count%20characters.%5Cn%22%3B%0A%0ATell%20me%20how%20I%20can%20convert%20this%20Perl%20script%20to%20Typescript.%20The%20functionality%20and%20output%20of%20the%20new%20script%20should%20be%20exactly%20the%20same%20as%20the%20existing%20one.%20Also%20tell%20me%20how%20to%20run%20the%20new%20file%20using%20Node.)

Tell me how I can convert this Perl script to Typescript. The functionality and output of the new script should be exactly the same as the existing one. Also tell me how to run the new file using Node.

#!/usr/bin/perl
use strict;
use warnings;
use File::Spec;
use File::Basename;

print "Please enter the path to a local text file: ";
chomp(my $file\_path = <STDIN>);

if ($file\_path =~ /\[\`|;&<>(){}\\\[\\\]\]/ || !File::Spec->file\_name\_is\_absolute($file\_path) && dirname($file\_path) ne '.') {
    die "Invalid file path. Please provide a valid path.\\n";
}
if (!-e $file\_path) {
    die "File not found. Please provide an existing file path.\\n";
}

open(my $fh, '<', $file\_path) or die "Could not open file '$file\_path': $!\\n";

my $is\_binary = 0;
while (read($fh, my $buffer, 1024)) {
    if ($buffer =~ /\[^\\x09\\x0A\\x0D\\x20-\\x7E\]/) {
        $is\_binary = 1;
        last;
    }
}
close($fh);

if ($is\_binary) {
    die "The file '$file\_path' is a binary file. Please provide a text file.\\n";
}

open($fh, '<', $file\_path) or die "Could not open file '$file\_path': $!\\n";
my $content = do { local $/; <$fh> };
close($fh);

my $word\_count = scalar(split /\\s+/, $content);
my $char\_count = length($content);

print "The file '$file\_path' contains $word\_count words and $char\_count characters.\\n";

Tell me how I can convert this Perl script to Typescript. The functionality and output of the new script should be exactly the same as the existing one. Also tell me how to run the new file using Node.

```copilot
Tell me how I can convert this Perl script to Typescript. The functionality and output of the new script should be exactly the same as the existing one. Also tell me how to run the new file using Node.
```

## [Example response](#example-response)

Copilot generates the following Typescript code.

Note

Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

TypeScript

import \* as fs from 'fs';
import \* as path from 'path';
import \* as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the path to a local text file: ', (filePath) => {
    rl.close();

    if (/\[\`|;&<>(){}\\\[\\\]\]/.test(filePath) || (!path.isAbsolute(filePath) && path.dirname(filePath) !== '.')) {
        console.error('Invalid file path. Please provide a valid path.');
        process.exit(1);
    }

    if (!fs.existsSync(filePath)) {
        console.error('File not found. Please provide an existing file path.');
        process.exit(1);
    }

    const fileBuffer = fs.readFileSync(filePath);
    const isBinary = fileBuffer.some(byte => byte < 9 || (byte > 13 && byte < 32) || byte > 126);

    if (isBinary) {
        console.error(\`The file '${filePath}' is a binary file. Please provide a text file.\`);
        process.exit(1);
    }

    const content = fileBuffer.toString('utf-8');
    const wordCount = content.split(/\\s+/).length;
    const charCount = content.length;

    console.log(\`The file '${filePath}' contains ${wordCount} words and ${charCount} characters.\`);
});

```typescript
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the path to a local text file: ', (filePath) => {
    rl.close();

    if (/[`|;&<>(){}\[\]]/.test(filePath) || (!path.isAbsolute(filePath) && path.dirname(filePath) !== '.')) {
        console.error('Invalid file path. Please provide a valid path.');
        process.exit(1);
    }

    if (!fs.existsSync(filePath)) {
        console.error('File not found. Please provide an existing file path.');
        process.exit(1);
    }

    const fileBuffer = fs.readFileSync(filePath);
    const isBinary = fileBuffer.some(byte => byte < 9 || (byte > 13 && byte < 32) || byte > 126);

    if (isBinary) {
        console.error(`The file '${filePath}' is a binary file. Please provide a text file.`);
        process.exit(1);
    }

    const content = fileBuffer.toString('utf-8');
    const wordCount = content.split(/\s+/).length;
    const charCount = content.length;

    console.log(`The file '${filePath}' contains ${wordCount} words and ${charCount} characters.`);
});
```

Save this file as `wordcount.ts`.

Copilot goes on to explain how to run the new file using Node.

1.  **Install Node.js:** If you don't have it already, download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/).
    
2.  **Install TypeScript:**
    
    ```shell
    npm install -g typescript
    ```
    
3.  **Compile the TypeScript code:**
    
    ```shell
    tsc wordcount.ts
    ```
    
    This will create a `wordcount.js` file in the same directory.
    
4.  **Run the JavaScript file with Node.js:**
    
    ```shell
    node wordcount.js
    ```
    

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)