// 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for icons if needed
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule], // Add Angular Material modules
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    animations: [
        trigger('imageSlider', [
            state('slide-1', style({ transform: 'translateX(0%)' })),
            state('slide-2', style({ transform: 'translateX(-100%)' })),
            state('slide-3', style({ transform: 'translateX(-200%)' })),
            state('slide-4', style({ transform: 'translateX(-300%)' })),
            state('slide-5', style({ transform: 'translateX(-400%)' })),
            transition('* <=> *', animate('20s linear')) // Changed to linear for smoother transition
        ])
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    imageSources: string[] = [
        'assets/images/img_1.jpg',
        'assets/images/img_2.jpg',
        'assets/images/img_3.jpg',
        'assets/images/img_4.jpg',
        'assets/images/bristle_logo.jpg'
    ];
    currentSlide = 0;
    sliderState = `slide-${this.currentSlide + 1}`;
    intervalId: any;

    ngOnInit(): void {
        this.startSlider();
    }

    ngOnDestroy(): void {
        this.stopSlider();
    }

    startSlider(): void {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 20000); // 20 seconds interval
    }

    stopSlider(): void {
        clearInterval(this.intervalId);
    }

    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.imageSources.length;
        this.sliderState = `slide-${(this.currentSlide) + 1}`;
    }
}