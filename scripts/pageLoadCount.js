window.onload = function() {
    let reviewCount = localStorage.getItem('completedReviews');
    
    reviewCount++;

    localStorage.setItem('completedReviews', reviewCount);
};