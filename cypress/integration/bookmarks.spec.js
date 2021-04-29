
describe ('Tests page', function(){
    beforeEach(function() {
        cy.visit('/bookmarks')
    })
    it('Tests page displays list of bookmarks', function() {
        cy.contains('www.facebook.com')
    })
      it('adding url to bookmarks', function() {
        cy.get('#add-input').type('www.twitter.com')
        cy.get('#add-submit').click()
        cy.contains('www.twitter.com')
    })
        it('deleting  url from bookmarks', function() {
        cy.contains('www.twitter.com')
        cy.get('#delete-button').click()
        cy.get('#bookmark-05').should('not.exist')
    })
})