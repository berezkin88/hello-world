import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customtitlecase'
})
export class CustomTitleCase implements PipeTransform {
    exceptions = ['of', 'the', 'a', 'on', 'of', 'over', 'is'];

    // tslint:disable-next-line: typedef
    transform(value: string) {
        if (!value) {
            return;
        }
        const granulated = value.split(' ');

        granulated.forEach((w, i) => {
            if (i > 0 && this.isPreposition(w)) {
                granulated[i] = w.toLowerCase();
            } else {
                granulated[i] = this.toTitleCase(w);
            }
        });

        return granulated.join(' ');
    }

    private toTitleCase(value: string): string {
        return value.substr(0, 1).toUpperCase() + value.substr(1, value.length).toLowerCase();
    }

    private isPreposition(value: string): boolean {
        return this.exceptions.includes(value.toLowerCase());
    }
}