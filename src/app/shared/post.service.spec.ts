import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Subscription } from 'rxjs';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';

import { PostService } from './post.service';

fdescribe('Post Service', () => {

    let backend: MockBackend;
    let unit: PostService;
    let postServiceSubscription: Subscription;

    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                PostService
            ]
        }).compileComponents();

        unit = TestBed.get(PostService);
        backend = TestBed.get(MockBackend);
    });

    it('should be able to call getAllPosts', async(() => {

        backend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toEqual('https://jsonplaceholder.typicode.com/posts');
            expect(connection.request.text()).toEqual('');
            expect(connection.request.headers.get('Content-Type')).toEqual(null);

            let options = new ResponseOptions({
                body: JSON.stringify({ success: true })
            });
            connection.mockRespond(new Response(options));
        });

        postServiceSubscription = (unit.getAllPosts().subscribe(response => {
            expect(response).toEqual({ success: true });
        }));
        postServiceSubscription.unsubscribe();

    }));
});
