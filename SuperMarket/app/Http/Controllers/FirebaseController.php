<?php

namespace App\Http\Controllers;

use Kreait\Firebase\Factory;
use Kreait\Firebase\Firestore\Database; // Import the Database class
use Illuminate\Http\Request;

class FirebaseController extends Controller
{
    protected $firestore;

    public function __construct()
    {
        // Initialize Firestore
        $this->firestore = (new Factory)->createFirestore()->database(); // Get the Database instance
    }

    // Create a document in Firestore
    public function createDocument()
    {
        $data = [
            'product_name' => 'Kacang',
            'price' => 15000,
            'product_count' => 200
        ];

        // Add the data to Firestore
        $this->firestore->collection('supermarkets')->add($data);

        return response()->json(['message' => 'Document added successfully']);
    }

    // Get a document from Firestore
    public function getDocument($supermarketId)
    {
        // Fetch document by ID
        $document = $this->firestore->collection('supermarkets')->document($supermarketId)->snapshot();

        // Check if the document exists
        if ($document->exists()) {
            return response()->json($document->data());
        }

        return response()->json(['message' => 'Document not found'], 404);
    }
}